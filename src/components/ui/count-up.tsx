import { useEffect, useState } from "react";
import { motion, animate, useMotionValue, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export interface AnimatedCounterProps {
  /** Valor inicial del contador */
  from?: number;
  /** Valor final del contador */
  to?: number;
  /** Duración de la animación en segundos */
  duration?: number;
  /** Retraso antes de iniciar la animación en segundos */
  delay?: number;
  /** Intensidad del efecto rebote (0-1) */
  bounce?: number;
  /** Título del contador */
  title?: string;
  /** Texto mientras cuenta */
  loadingText?: string;
  /** Texto cuando termina */
  completeText?: string;
  /** Clase CSS para el contenedor */
  className?: string;
  /** Clase CSS para el número */
  numberClassName?: string;
  /** Clase CSS para el título */
  titleClassName?: string;
  /** Clase CSS para el texto de estado */
  statusClassName?: string;
  prefix?: string;
}

export default function AnimatedCounter({
  from = 0,
  to = 1000,
  duration = 3,
  delay = 0,
  bounce = 0.1,
  prefix = "",
  title = "Contador Automático",
  loadingText = "Contando...",
  completeText = "¡Completado!",
  className,
  numberClassName,
  titleClassName,
  statusClassName,
}: AnimatedCounterProps) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [isComplete, setIsComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setHasStarted(true);
      const controls = animate(count, to, {
        type: "spring",
        duration,
        bounce,
        onComplete: () => setIsComplete(true),
      });

      return () => controls.stop();
    }, delay * 1000); // Convertir delay a milisegundos

    return () => clearTimeout(startTimeout);
  }, [count, to, duration, bounce, delay]);

  return (
    <div
      className={cn(
        " flex flex-col items-center justify-center w-fit h-fit",
        className
      )}
    >
      <div className="flex flex-col items-center gap-6 p-8 rounded-xl border h-[200px] w-[300px]">
        <motion.div
          className={cn(
            "relative text-5xl font-bold text-foreground text-center tabular-nums",
            numberClassName
          )}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: hasStarted ? 1 : 0.5, opacity: hasStarted ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span className="flex items-center gap-1">
            <motion.span>{rounded}</motion.span>
            {prefix}
          </motion.span>
        </motion.div>

        <motion.div
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: hasStarted ? 1 : 0, y: hasStarted ? 0 : 20 }}
          transition={{ delay: delay + 0.3 }}
        >
          <h1
            className={cn(
              "text-2xl font-bold text-foreground text-center",
              titleClassName
            )}
          >
            {title}
          </h1>
          <motion.p
            className={cn("text-sm text-muted-foreground", statusClassName)}
          >
            {!hasStarted ? "" : isComplete ? completeText : loadingText}
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
