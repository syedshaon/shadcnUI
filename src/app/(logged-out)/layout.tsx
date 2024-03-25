type Props = {
  children?: React.ReactNode;
};

import LightDarktoggle from "@/components/ui/light-dark-toggle";

function LoggedOutLayout({ children }: Props) {
  return (
    <>
      <div className="flex flex-col min-h-screen justify-center gap-4 items-center p-24">{children}</div>
      <LightDarktoggle className="fixed top-1/2 right-2 -mt-3" />
    </>
  );
}

export default LoggedOutLayout;
