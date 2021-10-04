import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <div>
            <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
             Our Services
        </button>
             <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
             <Link className="dropdown-item active" to ="http://admission.feniuniversity.edu.bd/">Admission</Link>
             <Link className="dropdown-item " to ="https://www.feniuniversity.edu.bd/pages/content_details/photo-gallery-2">Facilities</Link>
            <Link className="dropdown-item " to ="https://www.feniuniversity.edu.bd/pages/content_details/photo-gallery-2">Academic</Link>
            <Link className="dropdown-item " to ="https://www.feniuniversity.edu.bd/pages/content_details/photo-gallery-2">Faculty </Link>
            <Link hr className="dropdown-divider"></Link>
                    </ul>
             </div>
             <img className="img-fluid" src="https://www.feniuniversity.edu.bd/img/frontend/programme/faculty-of-business-administration-58173-2.jpg" alt="" />
         </div>
    );
};

export default Services;