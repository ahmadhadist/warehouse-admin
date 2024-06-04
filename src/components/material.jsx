import { useState } from "react";

function Material() {
  return (
    <>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <span>
          <h1 class="h3 mb-0 text-gray-800">Material</h1>
          <p>List of Material</p>
        </span>
        <a
          class="btn btn-success btn-sm"
          data-toggle="modal"
          data-target="#createModal"
        >
          <i class="fa fa-plus-circle"></i> Add
        </a>
      </div>

      <div class="card shadow mb-4">
        <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
          <span>
            <label>Show&nbsp;</label>
            <select class="custom-select-sm">
              <option value="10">10</option>
              <option value="30">30</option>
              <option value="50">50</option>
            </select>
            <label>&nbsp;entries</label>
          </span>
          <span>
            <label>Search:&nbsp;</label>
            <input placeholder="keywords..." type="text" />
          </span>
        </div>
        {/* <!-- start body --> */}
      </div>
    </>
  );
}

export default Material;
