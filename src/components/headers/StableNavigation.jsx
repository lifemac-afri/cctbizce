/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const StableNavigation = ({ data }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef({});

  useEffect(() => {
    const handleClickOutside = (event) => {
      const isOutsideAll = Object.values(dropdownRef.current).every(
        (ref) => ref && !ref.contains(event.target)
      );

      if (isOutsideAll) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="hidden md:flex items-center space-x-8">
      {data.map((item, index) =>
        item.items && item.items.length > 0 ? (
          <div
            key={item.title}
            className="relative"
            ref={(el) => (dropdownRef.current[index] = el)}
          >
            <NavLink
              to={item.link}
              className={({ isActive }) =>
                "text-sm font-medium text-gray-800 hover:text-primary_green"
              }
              onMouseEnter={(e) =>
                setOpenDropdown(openDropdown === index ? null : index)
              }
            >
              {item.title}
            </NavLink>
            {openDropdown === index && (
              <div className="absolute flex flex-col bg-white shadow-md rounded-lg mt-2 w-96 z-10 px-5 py-5">
                {item.items?.map((subItem) => (
                  <NavLink
                    key={subItem.title}
                    to={subItem.link || "#"}
                    className={({ isActive }) =>
                      `px-4 py-5 text-sm text-gray-700 hover:text-primary_green hover:bg-gray-50  rounded-md`
                    }
                  >
                    <div className="flex items-center space-x-2">
                      {subItem.icon && (
                        <subItem.n_icon className="w-7 h-7 text-gray-700" />
                      )}
                      <span>{subItem.title}</span>
                    </div>
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ) : (
          <NavLink
            key={item.title}
            to={item.link}
            className={({ isActive }) =>
              "text-sm font-medium text-gray-800 hover:text-primary_green"
            }
          >
            {item.title}
          </NavLink>
        )
      )}
    </nav>
  );
};

StableNavigation.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          href: PropTypes.string,
          icon: PropTypes.elementType,
          n_icon: PropTypes.elementType,
        })
      ),
    })
  ).isRequired,
};

export default StableNavigation;
