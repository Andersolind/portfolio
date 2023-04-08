"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { initial, animate, exit, transition } from "utils/motions";
import { socialMedia } from "../constants";

export function ConnectMedia() {
	if (socialMedia.length === 0) {
		return null;
	}

	return (
		<LazyMotion features={domAnimation}>
			<m.nav role="menu" initial={initial} animate={animate} exit={exit} transition={transition}>
				<ul className="flex items-center gap-5">
					{socialMedia.map((item) => (
						<li key={item.id}>
							<a
								href={item.url}
								target="_blank"
								title={item.title}
								aria-label={item.title}
								className="text-2xl"
							>
								{item.icon}
							</a>
						</li>
					))}
				</ul>
			</m.nav>
		</LazyMotion>
	);
}
