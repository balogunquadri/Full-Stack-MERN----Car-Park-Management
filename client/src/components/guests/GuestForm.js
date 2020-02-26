import React, { useContext, useState, useEffect } from "react";
import GuestContext from "../../comtext/guestContext/guestContext";

const GuestForm = () => {
  const context = useContext(GuestContext);
  const { addGuest, editGuest, clearEdit, update_Guest } = context;

  useEffect(() => {
    if (editGuest !== null) {
      setGuest(editGuest);
    } else {
      setGuest({
        name: "",
        phone: "",
        platenumber: "",
        model: "",
        vehtype: ""
      });
    }
  }, [editGuest, context]);

  const [guest, setGuest] = useState({
    name: "",
    phone: "",
    platenumber: "",
    model: "",
    vehtype: "Car"
  });
  const { name, phone, platenumber, model, vehtype } = guest;
  const onchange = e => {
    setGuest({
      ...guest,
      [e.target.name]: e.target.value
    });
  };
  const onsubmit = e => {
    e.preventDefault();
    if (editGuest === null) {
      addGuest(guest);
    } else {
      update_Guest(guest);
      clearEdit();
    }
    setGuest({
      name: "",
      phone: "",
      platenumber: "",
      model: "",
      vehtype: "Car"
    });
  };
  return (
    <div className="invite-section">
      <h1>{editGuest !== null ? "Edit Guest" : "Register Vehicle"}</h1>
      <form onSubmit={onsubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={onchange}
          required
        />
        <input
          type="text"
          placeholder="Phone"
          name="phone"
          value={phone}
          onChange={onchange}
          required
        />
        <input
          type="text"
          placeholder="PlateNumber"
          name="platenumber"
          value={platenumber}
          onChange={onchange}
          required
        />
        <input
          type="text"
          placeholder="Model"
          name="model"
          value={model}
          onChange={onchange}
          required
        />
        <p className="options-label">Vehicle Type</p>
        <div className="options">
          <label class="container">
            Bike
            <input
              type="radio"
              name="vehtype"
              value="Bike"
              onChange={onchange}
              checked={vehtype === "Bike"}
            />
            <span class="checkmark"></span>
          </label>
          <label class="container">
            Car
            <input
              type="radio"
              name="vehtype"
              value="Car"
              onChange={onchange}
              checked={vehtype === "Car"}
            />
            <span class="checkmark"></span>
          </label>
          <label class="container">
            Suv
            <input
              type="radio"
              name="vehtype"
              value="Suv"
              onChange={onchange}
              checked={vehtype === "Suv"}
            />
            <span class="checkmark"></span>
          </label>
          <label class="container">
            Jeep
            <input
              type="radio"
              name="vehtype"
              value="Jeep"
              onChange={onchange}
              checked={vehtype === "Jeep"}
            />
            <span class="checkmark"></span>
          </label>
          <label class="container">
            Bus
            <input
              type="radio"
              name="vehtype"
              value="Bus"
              onChange={onchange}
              checked={vehtype === "Bus"}
            />
            <span class="checkmark"></span>
          </label>
        </div>
        <input
          type="submit"
          value={editGuest !== null ? "Update Guest" : "Add Guest"}
          className="btn"
        />
        {editGuest !== null ? (
          <input
            onClick={clearEdit}
            type="button"
            className="btn clear"
            value="Cancel"
          />
        ) : null}
      </form>
    </div>
  );
};

export default GuestForm;
