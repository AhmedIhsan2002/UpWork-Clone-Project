import SidebarLink from "@/components/atoms/SidebarLink";
import { StyledSection } from "@/style/common";

const SidebarLinks = () => {
  return (
    <StyledSection margin='30px 0 0'>
      <SidebarLink linkName="Upwork Academy" path="https://community.upwork.com/t5/Academy/ct-p/Academy" />
      <SidebarLink linkName="GetPaid" path="https://www.upwork.com/ab/flservices/contracts/" />
      <SidebarLink linkName="Community & Forums" path="https://community.upwork.com/" />
      <SidebarLink linkName="Help Center" path="https://support.upwork.com/hc/en-us" />
    </StyledSection>
  )
}

export default SidebarLinks;