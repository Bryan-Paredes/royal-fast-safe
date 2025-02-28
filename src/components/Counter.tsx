import AnimatedCounter from "./ui/count-up";

export default function Counter() {
  return (
    <div className="flex flex-wrap max-w-6xl m-auto items-center justify-evenly gap-4 p-4">
      <AnimatedCounter
        from={0}
        to={2750}
        duration={5}
        delay={0.5}
        bounce={0.2}
        prefix="+"
        title="Loads Carried"
        loadingText="calculating..."
        completeText="¡Let's go for more!"
        className=""
        numberClassName="font-semibold"
        titleClassName="text-xl font-medium text-primary-700"
      />
      <AnimatedCounter
        from={0}
        to={2000}
        duration={5}
        delay={0.5}
        bounce={0.2}
        prefix="+"
        title="Clients Served"
        loadingText="calculating..."
        completeText="¡Let's go for more!"
        className=""
        numberClassName="font-semibold"
        titleClassName=" text-xl font-medium text-primary-700"
      />
      <AnimatedCounter
        from={0}
        to={9}
        duration={5}
        delay={0.5}
        bounce={0.2}
        prefix="+"
        title="Years Experience"
        loadingText="calculating..."
        completeText="¡Let's go for more!"
        className=""
        numberClassName="font-semibold"
        titleClassName=" text-xl font-medium text-primary-700"
      />
    </div>
  );
}
