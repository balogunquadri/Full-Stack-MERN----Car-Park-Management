import React, { useContext } from "react";
import GuestContext from "../../comtext/guestContext/guestContext";

const CountGuest = () => {
  const { guests } = useContext(GuestContext);
  // total confirmed
  const confirmed = guests.filter(guest => guest.isconfirmed);
  // count by vehtype
  const countByvehtype = vehtype => {
    return {
      total: guests.filter(guest => guest.vehtype === vehtype).length,
      confirmed: confirmed.filter(guest => guest.vehtype === vehtype).length
    };
  };

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Vehicles</th>
            <th>Total Parked</th>
            <th>Checked Out</th>
          </tr>
          <tr>
            <th>Bike</th>
            <td>{countByvehtype("bike").total}</td>
            <td>{countByvehtype("bike").confirmed}</td>
          </tr>
          <tr>
            <th>Car</th>
            <td>{countByvehtype("Car").total}</td>
            <td>{countByvehtype("Car").confirmed}</td>
          </tr>
          <tr>
            <th>Suv</th>
            <td>{countByvehtype("Suv").total}</td>
            <td>{countByvehtype("Suv").confirmed}</td>
          </tr>
          <tr>
            <th>Jeep</th>
            <td>{countByvehtype("Jeep").total}</td>
            <td>{countByvehtype("Jeep").confirmed}</td>
          </tr>
          <tr>
            <th>Bus</th>
            <td>{countByvehtype("Bus").total}</td>
            <td>{countByvehtype("Bus").confirmed}</td>
          </tr>
          <tr>
            <th>Total</th>
            <td>{guests.length}</td>
            <td>{confirmed.length}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountGuest;
