/*** react dependencies*/
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { RiFilterLine } from "react-icons/ri";
import { RiFilterFill } from "react-icons/ri";


/**internal dependencies */
import { clearProducts, setFilter } from "../../../reducers/indx";
import { dropdownSections } from "./utils";
import './sidetopic.css';

const SideTopicBar = () => {
    const [showClearFilter, setShowClearFilter] = useState(false);
    const [filterActiveIcon, setFilterActiveIcon] = useState(false);

    const dispatch = useDispatch();
    const [expandedSections, setExpandedSections] = useState({
        artTypes: false,
        artist: false,
        material: false,
        priceRange: false,
    });

    const toggleSection = (section) => {
        setExpandedSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));

    };

    const handleFilterSelect = (filterValue) => {
        dispatch(setFilter(filterValue));
        setShowClearFilter(true);
        setFilterActiveIcon(true);
        console.log('filter dispatched', setFilter(filterValue));
    };

    const handleclear = () => {
        dispatch(clearProducts());
        setShowClearFilter(false);
        setFilterActiveIcon(false);
    }

    return (
        <div className="dropdown-section">
            <div className="statics-btn">
                <button className="add-filter">{filterActiveIcon ? <RiFilterFill className="filter-i" /> : <RiFilterLine className="filter-i" />}Filter</button>
                {showClearFilter && <button onClick={handleclear} className="clear-btn">Clear Filter</button>}
            </div>
            {dropdownSections.map(({ id = "", label = "", options = [] }) => (
                <div key={id} className="mt-8">
                    <div
                        onClick={() => toggleSection(id)}
                        className="dropdown-header menu-item"
                    >
                        <span>{label}</span>
                        <span className={`arrow ${expandedSections[id] ? "arrow-up" : "arrow-down"}`} />
                    </div>

                    {expandedSections[id] && options.map(({ id: optionId, label: optionLabel, img }) => (
                        <div
                            key={optionId}
                            className="dropdown-content menu-item"
                            onClick={() => handleFilterSelect(optionLabel)} // On click, set the filter
                        >
                            <img src={img || 'defaultImage'} alt={optionId} />
                            <span className="li-cl-name">{optionLabel}</span>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};
export default SideTopicBar;