import { Module, Program, Config } from "../api";

export default class Template extends Module {
	constructor(program: Program, config: Config) {
		super(program, config, {
			id: "template",
			name: "Template",
			version: "0.0.1",
			description: "Template module.",
			author: "You",
		});
	}

	public override async start() {
		this.log("Started.");
	}

	public override async stop() {
		this.log("Stopped.");
	}
}
