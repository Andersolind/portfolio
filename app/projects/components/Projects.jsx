import { ProjectItem } from "../../sections";

export function Projects({ projects }) {

	const tempProjects = [{
		_id: "1", description: "Ontario Electricity", images: [{original:"https://www.oeb.ca/themes/de_theme/logo.svg",lazy:"loading"}],
		liveUrl: "https://ontarioelectricitysupport.ca",

		stack: { tag: '1' },
		 repoUrl: "", title: "New React JS Website", createdAt: ""
	},
	{
		_id: "2", description: "RBC", images: [{original:"https://media.gettyimages.com/id/1241226854/photo/rbc-royal-bank-logo-in-south-edmonton-thursday-may-19-in-edmonton-alberta-canada.jpg?s=612x612&w=0&k=20&c=j3sePe69_oqMvhC_A6KIJDJq4SA-ETbQgcoc16eXwTA=",lazy:"loading"}],
		liveUrl: "https://rbc.ca",

		stack: { tag: '2' },
		 title: "Online Banking", createdAt: ""
	},
	{
		_id: "3", description: "Oil Change Toronto", images: [{original:"https://oilchangeintoronto.ca/_ipx/w_384,q_75/%2Fimages%2FallType.png?url=%2Fimages%2FallType.png&w=384&q=75",lazy:"loading"}],
		liveUrl: "https://oilchangeintoronto.ca",

		stack: { tag: '3' },
		title: "Oil Change in Toronto", stack: "React", createdAt: ""
	},
	{
		_id: "3", description: "All Type Transmission", images: [{original:"https://img1.wsimg.com/isteam/stock/2224/:/rs=w:1920,m",lazy:"loading"}],
		liveUrl: "https://transmissionrepairintoronto.com/",

		stack: { tag: '3' },
		 stack: "React", title: "All Type Transmission", createdAt: ""
	},
	{
		_id: "4", description: "TD", images: [{original:"https://www.td.com/content/dam/wealth/images/direct-investing/td-logo-en.png",lazy:"loading"}],
		liveUrl: "https://www.td.com/",

		stack: { tag: '4' },
		title: "TD", stack: "React", createdAt: ""
	}
	
];
	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
			{tempProjects
				?.sort((a, b) => new Date() - new Date())
				?.map((project, index) => (
					<ProjectItem key={project._id} project={project} index={index} />
				))}
		</div>
	);
}
