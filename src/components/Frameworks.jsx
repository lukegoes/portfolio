import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    "auth0",
    "blazor",
    "cplusplus",
    "csharp",
    "css3",
    "html5",
    "javascript",
    "github",
    "git",
    "vitejs",
    "visualstudiocode",
    "threejs",
    "stripe",
    "tailwindcss",
    "sqlite",
    "microsoft",
    "dotnet",
  ];

  return (
    <div className="relative flex left-4 h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={35} >
        {skills.map((skill, index) => (
          <Icon key={index} src={`/assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles
        iconSize={25}
        radius={100}
        reverse
        speed={2}
      >{skills.reverse().map((skill, index) => (
          <Icon key={index} src={`/assets/logos/${skill}.svg`} />
        ))}
        </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img
    src={src}
    alt="icon"
    className="rounded-sm hover:scale-110 duration-200"
  />
);
