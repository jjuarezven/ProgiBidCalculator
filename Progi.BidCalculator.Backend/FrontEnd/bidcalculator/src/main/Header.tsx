import logo from "./Progi_logo.png";

export const Header = () => {
	return (
		<header className="row mb-4">
			<div className="col-5">
				<img src={logo} className="logo" alt="logo" />
			</div>
			<div className="col-7 mt-5 subtitle">Progi Bid Calculator</div>
		</header>
	);
};
