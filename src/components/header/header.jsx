import Navbar from '../navbar/navbar'
import './header.css'
import bgcImageBox from "../../assets/set-three-unlabeled-similar-craft-cardboard-boxes-with-covers-beautifully-arranged-studio-with-white-walls.png";

function HeaderCraft() {
  return (
    <header className="header">
        <Navbar />
        <img className="bgc-image" src={bgcImageBox} alt="bgc-image"/>
        <div className="container">
			<div className="header-body-content">
				<div className="main-content">
					<h2 className="body-title">Innovative carton products and solution</h2>
					<p className="body-text">At CraftBox we have a long tradition of producing corrugated packaging and integrating paper. We’re innovative and have the expertise to consistently deliver high-quality products that meet our customers’ needs.</p>
					<button className="body-btn">Download catalog</button>
				</div>
				<div className="sub-content">
					<span className="top-icon"></span>
					<p className="sub-text">Corrugated fiberboard</p>
					<span className="bottom-icon"></span>
				</div>
			</div>
		</div>
    </header>
  );
}

export default HeaderCraft
