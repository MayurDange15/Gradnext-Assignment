import "./calltoaction.css";
import Registration from "./registration";

export default function CallToAction() {
  return (
    <div>
      <div className="uhh uhu py-[2rem] ukc">
        <div className="uhh uht uip">
          <hgroup>
            <h2 className="uir uiv uje">Get started</h2>
            <p className="uhi uiq uiv uiw uix ujb ujs">1:1 Coaching Programs</p>
          </hgroup>
          <p className="uhh uhj uhv uis uiy uja">
            Get ready with tailored plan and targeted preparation guided by
            consultants from McKinsey, BCG and Bain
          </p>
        </div>
        {/*  */}
        <Registration />
        {/*  */}
      </div>
    </div>
  );
}
