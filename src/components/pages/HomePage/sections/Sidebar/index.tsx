import SidebarLinks from "@/components/molecules/SidabarLinks";
import SidebarConnects from "@/components/molecules/SidebarConnects";
import SidebarProposalCard from "@/components/molecules/SidebarProposalCard";

const Sidebar = () => {
  return (
    <aside>
      <SidebarConnects />
      <SidebarProposalCard
        title="Proposals"
        link1="My Proposals"
        link2=""
        paragraph="Seeking opportunities? Explore job listings and begin crafting your proposal."
        linkShow
      />
      <SidebarProposalCard
        title="Project Catalog"
        link1="My Project Control Panel"
        link2="Establish a Catalog project"
        paragraph="for  clients to buy right away"
        linkShow={false}
      />
      <SidebarLinks />
    </aside>
  );
};

export default Sidebar;
