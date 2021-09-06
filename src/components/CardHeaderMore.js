import React from "react"
import {
  faEllipsisV,
  faExpandArrowsAlt,
  faRedo,
  faTrashAlt,
  faWindowMinimize,
} from "@fortawesome/free-solid-svg-icons"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Dropdown } from "react-bootstrap"
export default function CardHeaderMore() {
  return (
    <div className="card-header-more">
      <Dropdown align="end">
        <Dropdown.Toggle variant="transparent">
          <FontAwesomeIcon icon={faEllipsisV} />
        </Dropdown.Toggle>

        <Dropdown.Menu className="text-sm">
          <Dropdown.Item href="#!">
            <FontAwesomeIcon icon={faExpandArrowsAlt} className="me-2" />
            Expand
          </Dropdown.Item>
          <Dropdown.Item href="#!">
            <FontAwesomeIcon icon={faWindowMinimize} className="me-2" />
            Minimize
          </Dropdown.Item>
          <Dropdown.Item href="#!">
            <FontAwesomeIcon icon={faRedo} className="me-2" />
            Reload
          </Dropdown.Item>
          <Dropdown.Item href="#!">
            <FontAwesomeIcon icon={faTrashAlt} className="me-2" />
            Remove
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}
