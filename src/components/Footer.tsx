import FooterButton from "./Footerbutton";
import { elementsFooter } from "./Footerbutton.tsx";
// import { settings } from "./Footerbutton";

export default function Footer() {
	return (
		<>
			<footer
				className="w-[100%]min-h-63 bg-[#7525a7] flex flex-col items-center p-10
        "
			>
				<div
					id="footer"
					className="w-[100%] flex justify-around p-1
        sm:flex flex-wrap "
				>
					<ul className="p-1 list-none">
						{elementsFooter.opts.map((each) => (
							<FooterButton key={each} opts={each} />
						))}
					</ul>
					<ul className=" p-1 list-none">
						{elementsFooter.opts2.map((each) => (
							<FooterButton key={each} opts={each} />
						))}
					</ul>
					<ul className=" p-1 list-none">
						{elementsFooter.opts3.map((each) => (
							<FooterButton key={each} opts={each} />
						))}
					</ul>
					<ul className="p-1 list-none">
						{elementsFooter.opts4.map((each) => (
							<FooterButton key={each} opts={each} />
						))}
					</ul>
					<ul className=" p-1 list-none">
						{elementsFooter.opts5.map((each) => (
							<FooterButton key={each}    opts={each} />
						))}
					</ul>
				</div>
				<div className="w-[100%] border-solid border-[#c9c6cb] border-t-2 text-center font-bold box-border p-10 text-white">
					Curso de HTML + CSS 2023
				</div>
			</footer>
		</>
	);
}
