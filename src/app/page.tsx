
import SearchView from "@/components/searchView";
import { roboto } from "@/components/ui/fonts";

export default function Home() {



  return (
 <div>
  <div className={ `${roboto.className} items-center w-full col-start` } >
    <h2 className="font-semibold text-3xl px-3 mx-4"> Hello and Welcome!</h2>
    <div className="flex justify-start items-start px-3 mx-4 text-sm">
     I am Sam Ervin a software engineer, manager, and project manager. I have been responsible for leadership and technical expertise in software engineering with a few different companies using many different systems architectures, hardware platforms, operating systems, frameworks, and programming languages throughout my career journey. I like all things .NET, tech gadgets, robotics, woodworking, sailing, boats and programming languages.
    </div>
  
  </div>
    <br />

</div>
  );
}
