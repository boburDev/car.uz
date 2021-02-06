import './advantages.css'

function Advantages() {
  return (
    <section className="">
        <div className="container">
            <div className="advantages-wrapper">
                <p className="advantage-title">Advantages</p>
                <ul className="advantages">
                    <li className="advantage">
                        <h3 className="advantage-value">
                            <span>+</span>
                            5
                        </h3>
                        <p className="advantage-info">
                            years of experience
                        </p>
                    </li>
                    <li className="advantage">
                        <h3 className="advantage-value">
                            <span>+</span>
                            1000
                        </h3>
                        <p className="advantage-info">
                            satisfied customers
                        </p>
                    </li>
                    <li className="advantage">
                        <h3 className="advantage-value">
                            <span>%</span>
                            98
                        </h3>
                        <p className="advantage-info">
                            regular customers
                        </p>
                    </li>
                    <li className="advantage">
                        <h3 className="advantage-value">
                            <span>+</span>
                            100
                        </h3>
                        <p className="advantage-info">
                            unique products
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Advantages