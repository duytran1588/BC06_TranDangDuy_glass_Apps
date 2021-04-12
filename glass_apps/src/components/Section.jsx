import React, { Component } from "react";

class Section extends Component {
  state = {
    glassSource: "./img/glassesImage/v2.png",
  };

  handleGlass = (type) => {
    let glass_Type_Source = "";
    // console.log(type);
    switch (type) {
      case "type_1":
        glass_Type_Source = "./img/glassesImage/v1.png";
        break;
      case "type_2":
        glass_Type_Source = "./img/glassesImage/v2.png";
        break;
      case "type_3":
        glass_Type_Source = "./img/glassesImage/v3.png";
        break;
      case "type_4":
        glass_Type_Source = "./img/glassesImage/v4.png";
        break;
      case "type_5":
        glass_Type_Source = "./img/glassesImage/v5.png";
        break;
      case "type_6":
        glass_Type_Source = "./img/glassesImage/v6.png";
        break;
      case "type_7":
        glass_Type_Source = "./img/glassesImage/v7.png";
        break;
      case "type_8":
        glass_Type_Source = "./img/glassesImage/v8.png";
        break;
      case "type_9":
        glass_Type_Source = "./img/glassesImage/v9.png";
        break;
    }
    this.setState({
      glassSource: glass_Type_Source,
    });
    
  };

  render() {
    return (
      <section className="glasses-app bg-dark" style={{ height: "100vh" }}>
        <h2 className="text-center h2 text-white py-1">Glasses App</h2>
        <div className="d-flex justify-content-center align-items-center">
          <div className="container row">
            <section className="model d-flex justify-content-center col-5">
              <div
                className="card text-left"
                style={{ width: 300, position: "relative" }}
              >
                <img
                  className="card-img-top"
                  src="./img/glassesImage/model.jpg"
                  alt="hinh model"
                />
                {/* //tạo biến chỗ này  */}
                <img
                  src={this.state.glassSource}
                  alt="kinh"
                  style={{
                    width: 170,
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-50%)",
                    top: "16%",
                  }}
                />
                <div className="card-body">
                  <span className="card-title badge-danger h3 px-2 rounded">
                    $50
                  </span>
                  <p className="card-text mt-2">GUCCI G8759H</p>
                </div>
              </div>
            </section>
            <section className="glasses__list mt-4 d-flex justify-content-around flex-wrap col-7">
              <div className="col-3">
                <button
                  onClick={() => {
                    this.handleGlass("type_1");
                  }}
                  className="btn btn-outline-secondary"
                >
                  <img
                    src="./img/glassesImage/v1.png"
                    alt="hinh"
                    style={{ width: 100, borderRadius: 20 }}
                  />
                </button>
              </div>
              <div className="col-3">
                <button
                  onClick={() => {
                    this.handleGlass("type_2");
                  }}
                  className="btn btn-outline-secondary"
                >
                  <img
                    src="./img/glassesImage/v2.png"
                    alt="hinh"
                    style={{ width: 100, borderRadius: 20 }}
                  />
                </button>
              </div>
              <div className="col-3">
                <button
                  onClick={() => {
                    this.handleGlass("type_3");
                  }}
                  className="btn btn-outline-secondary"
                >
                  <img
                    src="./img/glassesImage/v3.png"
                    alt="hinh"
                    style={{ width: 100, borderRadius: 20 }}
                  />
                </button>
              </div>
              <div className="col-3">
                <button
                  onClick={() => {
                    this.handleGlass("type_4");
                  }}
                  className="btn btn-outline-secondary"
                >
                  <img
                    src="./img/glassesImage/v4.png"
                    alt="hinh"
                    style={{ width: 100, borderRadius: 20 }}
                  />
                </button>
              </div>
              <div className="col-3">
                <button
                  onClick={() => {
                    this.handleGlass("type_5");
                  }}
                  className="btn btn-outline-secondary"
                >
                  <img
                    src="./img/glassesImage/v5.png"
                    alt="hinh"
                    style={{ width: 100, borderRadius: 20 }}
                  />
                </button>
              </div>
              <div className="col-3">
                <button
                  onClick={() => {
                    this.handleGlass("type_6");
                  }}
                  className="btn btn-outline-secondary"
                >
                  <img
                    src="./img/glassesImage/v6.png"
                    alt="hinh"
                    style={{ width: 100, borderRadius: 20 }}
                  />
                </button>
              </div>
              <div className="col-3">
                <button
                  onClick={() => {
                    this.handleGlass("type_7");
                  }}
                  className="btn btn-outline-secondary"
                >
                  <img
                    src="./img/glassesImage/v7.png"
                    alt="hinh"
                    style={{ width: 100, borderRadius: 20 }}
                  />
                </button>
              </div>
              <div className="col-3">
                <button
                  onClick={() => {
                    this.handleGlass("type_8");
                  }}
                  className="btn btn-outline-secondary"
                >
                  <img
                    src="./img/glassesImage/v8.png"
                    alt="hinh"
                    style={{ width: 100, borderRadius: 20 }}
                  />
                </button>
              </div>
              <div className="col-3">
                <button
                  onClick={() => {
                    this.handleGlass("type_9");
                  }}
                  className="btn btn-outline-secondary"
                >
                  <img
                    src="./img/glassesImage/v9.png"
                    alt="hinh"
                    style={{ width: 100, borderRadius: 20 }}
                  />
                </button>
              </div>
            </section>
          </div>
        </div>
      </section>
    );
  }
}

export default Section;
