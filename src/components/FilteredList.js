import React, { Component } from "react"
import ImageCard from "./ImageCard"

class FilteredList extends Component {
  state = {
    category: "all",
    itemsToShow: this.props.allItems,
    catFuns: [
      { catFun: this.catAll, label: "all" },
      { catFun: this.catCode, label: "code" },
      { catFun: this.catUi, label: "ui / ux" },
      { catFun: this.catJournalism, label: "journalism" },
      { catFun: this.catDesign, label: "design" },
      { catFun: this.catPhotography, label: "photography" },
    ],
    isOpen: false,
  }

  // alter category property of the state in response to dropdown selections
  categoryGenerator = (g) => (e) => {
    this.setState({
      category: g,
    })
    this.refresh(g)
  }

  refresh = (category) => {
    let toRefresh = this.props.allItems

    // filter the state by category
    if (category === "code") {
      toRefresh = toRefresh.filter((i) => i.category.includes("code"))
    } else if (category === "ui / ux") {
      toRefresh = toRefresh.filter((i) => i.category.includes("ui"))
    } else if (category === "journalism") {
      toRefresh = toRefresh.filter((i) => i.category.includes("journalism"))
    } else if (category === "design") {
      toRefresh = toRefresh.filter((i) => i.category.includes("design"))
    } else if (category === "photography") {
      toRefresh = toRefresh.filter((i) => i.category.includes("photography"))
    }

    this.setState({
      itemsToShow: toRefresh,
    })
  }

  catAll = this.categoryGenerator("all")
  catCode = this.categoryGenerator("code")
  catUi = this.categoryGenerator("ui / ux")
  catJournalism = this.categoryGenerator("journalism")
  catDesign = this.categoryGenerator("design")
  catPhotography = this.categoryGenerator("photography")

  toggleDropdown = (e) => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  closeDropdown = (e) => {
    this.setState({ isOpen: false })
  }

  render() {
    const catFuns = [
      { catFun: this.catAll, label: "all" },
      { catFun: this.catCode, label: "code" },
      { catFun: this.catUi, label: "ui / ux" },
      // { catFun: this.catJournalism, label: "journalism" },
      { catFun: this.catDesign, label: "design" },
      // { catFun: this.catPhotography, label: "photography" },
    ]

    return (
      <div>
        <div className="grid grid-rows-1 pb-12 md:flex md:justify-center md:align-center justify-items-center">
          {catFuns.map((item) => (
            <button
              className="px-6 py-3 mx-2 mb-1 text-sm font-bold text-blue-500 uppercase bg-transparent border border-blue-500 border-solid outline-none rounded-2xl hover:bg-blue-500 hover:text-white focus:outline-none focus:text-white focus:bg-blue-500"
              type="button"
              style={{ transition: "all .15s ease" }}
              onClick={item.catFun}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-2 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 4xl:grid-cols-5 justify-items-center">
          {this.state.itemsToShow.map((item) => (
            <ImageCard key={item.id} item={item}></ImageCard>
          ))}
        </div>
      </div>
    )
  }
}

export default FilteredList

  /* <button
                className={
                  this.state.isOpen
                    ? " cursor-default bg-black opacity-50 fixed inset-0 w-full h-full"
                    : "hidden"
                }
                onClick={this.closeDropdown}
                tabIndex="-1"
              /> */
