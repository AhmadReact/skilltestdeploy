import SidebarRow from "./SidebarRow";

const Sidebarbody = () => {
  const sidebaritems = [
    { name: "Dashboard", src: "/Group.png" },
    { name: "Workflow", src: "/Workflow.png" },
    { name: "Calendar", src: "/Calendar.png" },
    { name: "SocialRM ", src: "/Social.png" },
    { name: "Metrics", src: "/Analytic.png" },
    { name: "Leads", src: "/Lead.png" },
    { name: "Users", src: "/Userstar.png" },
    { name: "Notifications", src: "/Notifications.png" },
    { name: "Documents", src: "/Documents.png" },
    { name: "Segments", src: "/Segments.png" },
  ];

  return (
    <>
      <div
        style={{
          
          paddingTop: 10,
          paddingBottom: 10,
          borderBottom: "1px solid #80808029"
        }}
      >
        {sidebaritems.map((obj, i) => {
          return <SidebarRow name={obj.name} src={obj.src} key={i} />;
        })}
      </div>
      <div style={{ marginTop: 10 }}>
        <SidebarRow name="Company" src="/Company.png" />
      </div>
    </>
  );
};

export default Sidebarbody;
