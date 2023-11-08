import React from 'react'
import { EmployeeInfoEditModal } from '../../pages/employementsList/EmployeeInfoEditModal'
import { Button } from '../UI/Button'
import { EmployeeBase, EmployeeWithoutId } from '../../../types/type'

export type HandleSaveButtonClick = (
  registerInfo: EmployeeWithoutId,
  id: string | undefined
) => void

type EmployeeInfoListBase = {
  employeeData: EmployeeBase[]
  handleEditClick: (index: number) => void
  handleSaveButtonClick: HandleSaveButtonClick
  handleCloseButton: React.MouseEventHandler<HTMLButtonElement>
  handleDeleteButton: (id: string | undefined) => void
  editEmployeeIndex: number | null
}

function EmployeeInfoList({
  employeeData,
  handleEditClick,
  handleSaveButtonClick,
  handleCloseButton,
  handleDeleteButton,
  editEmployeeIndex,
}: EmployeeInfoListBase) {
  return (
    <div>
      <table className="employeeList">
        <thead>
          <tr>
            <th>Sur</th>
            <th>Given</th>
            {/* <th>セイ</th>
            <th>メイ</th> */}
            <th>Postion</th>
            <th>Department</th>
            <th>Rank</th>
            <th>Contract Type</th>
            <th>Enter Date</th>
            <th>Birthday</th>
            <th>School</th>
            <th>Phone number</th>
          </tr>
        </thead>
        <tbody>
          {employeeData.map((employee, index) => {
            return (
              <tr key={employee.employee_id}>
                <td>{employee.last_name}</td>
                <td>{employee.first_name}</td>
                <td>{employee.position_name}</td>
                <td>{employee.department_name}</td>
                <td>{employee.degree_name}</td>
                <td>{employee.contract_name}</td>
                <td>
                  <span className="employeeInfoNum">{employee.hire_date}</span>
                </td>
                <td>
                  <span className="employeeInfoNum">{employee.birthday}</span>
                </td>
                <td>{employee.education}</td>
                <td>
                  <span className="employeeInfoNum">
                    {employee.phone_number}
                  </span>
                </td>
                <td>
                  <Button
                    text={'Edit'}
                    onClick={() => handleEditClick(index)}
                    className="employeeListEditButton"
                  />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      {editEmployeeIndex !== null && (
        <div id="modal" className="modal">
          <EmployeeInfoEditModal
            buttonText="Save"
            handleButtonClick={(registerInfo) => {
              handleSaveButtonClick(
                registerInfo,
                employeeData[editEmployeeIndex].employee_id
                //propsで渡ってきたemployeeDataの配列にindexでアクセスする
              )
            }}
            handleCloseButton={handleCloseButton}
            handleDeleteButton={() =>
              handleDeleteButton(employeeData[editEmployeeIndex].employee_id)
            }
            employee={employeeData[editEmployeeIndex]}
          />
        </div>
      )}
    </div>
  )
}

export default EmployeeInfoList
