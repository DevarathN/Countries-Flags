import { useState } from "react";
import { useEffect } from "react";

const LandingPage = () => {
  const [countryInfo, setCountryInfo] = useState(null);

  useEffect(() => {
    const retrieveCountryInfo = async () => {
      try {
        const res = await fetch(
          "https://xcountries-backend.azurewebsites.net/all"
        );
        const data = await res.json();
        setCountryInfo(data);
      } catch (err) {
        console.error("Error fetching data: "+err);
      }
    };
    retrieveCountryInfo();
  }, []);

  return (
    <div className="landingpage">
      <div className="row">
        {countryInfo
          ? countryInfo.map((country) => (
              <div key={country.abbr} className="country-card">
                <div className="countryflag">
                  <img
                    className="countryflag"
                    src={country.flag}
                    alt={country.name + " flag"}
                  />
                </div>
                <p className="cardheader">{country.name}</p>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};
export default LandingPage;
