//Data
const AboutData = [
    { title: "Age", value: "19" },
    { title: "Residence", value: "Bangladesh" },
    { title: "Address", value: "Dhaka, Bangladesh" },
    { title: "e-mail", value: "mail@siamahnaf.com" },
    { title: "Phone", value: "+8801611994403" },
    { title: "Organization", value: "Code Station-21" },
]

const AboutList = () => {
    return (
        <ul className="mt-10 ml-10">
            {AboutData.map((item, i) => (
                <li key={i} className="flex my-2">
                    <span className="min-w-[140px] font-medium">{item.title}</span>
                    <span className="font-medium opacity-50">{item.value}</span>
                </li>
            ))}
        </ul>
    );
};

export default AboutList;