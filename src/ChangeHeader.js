import React,{Component} from "react";

class ChangeHeaderForHostedFreeTrials extends Component {
  componentDidMount() {

    document.getElementsByClassName("navbar__title")[0].innerHTML = "Hosted Free Trial"
    document.getElementsByClassName("navbar__title")[1].innerHTML = "Hosted Free Trial"

    //Unlink and relink.
    const brand0 = document.getElementsByClassName("navbar__brand")[0]
    const content = brand0.innerHTML;
    brand0.remove();
    let newBrand = document.createElement("a");
    newBrand.setAttribute("href", "/docs/getting-started/hello-hosted-trial")
    newBrand.classList.add("navbar__brand")
    newBrand.innerHTML = content;
    document.getElementsByClassName("navbar__toggle")[0].after(newBrand)


    const brand1 = document.getElementsByClassName("navbar__brand")[1]
    brand1.remove();
    newBrand = document.createElement("a");
    newBrand.setAttribute("href", "/docs/getting-started/hello-hosted-trial")
    newBrand.classList.add("navbar__brand")
    newBrand.innerHTML = content;
    document.getElementsByClassName("menu")[0].before(newBrand)


//Clear "Docs"
    document.getElementsByClassName("navbar__item")[0].innerHTML = ""
    document.getElementsByClassName("menu__link")[0].innerHTML = ""
}
  render() {
    return null;
  }
}

export default ChangeHeaderForHostedFreeTrials;