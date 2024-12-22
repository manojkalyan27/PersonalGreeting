import "./NH.css";

function NHeader() {
  return (
    <header className="header">
      
        <h1 classname="netflix_title">
          Netflix
          </h1>

        <div className="header_actions">

          <select className="header_selection">
            <option>English</option>
            <option>Telugu</option>
          </select>

          <button className="header_btn">Sign In</button>

        </div>

    
    </header>
  );
}
export default NHeader;
