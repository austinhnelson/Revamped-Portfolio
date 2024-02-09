import LatestWork from "./components/latest-work";

export default function Home() {
  return (
    <>
      <div
        className="flex flex-col items-left h-screen mt-20 font-body diagonal-lines"
        style={{ height: "95vh" }}
      >
        <div className="text-center mt-20">
          <h1 className="text-4xl font-bold">Hey there!</h1>
        </div>
        <div className="text-center mt-4">
          <h2 className="text-2xl">
            My name is
            <span className="text-4xl font-bold text-teal-600">
              {" "}
              Austin Nelson.{" "}
            </span>
          </h2>
        </div>
        <div className="text-center mt-4">
          <p className="text-lg">
            I&apos;m an aspiring software engineer with a passion to change the
            world.
          </p>
        </div>
      </div>
      <LatestWork />
    </>
  );
}
