import React, { useState } from 'react'
import RegisterNameInput from './RegisterNameInput'
import { ContractOptions } from '../../pages/register/ContractOptions'
import { DepartmentOptions } from '../../pages/register/DepartmentOptions'
import { PositionOptions } from '../../pages/register/PositionOptions'
import { RankOptions } from '../../pages/register/RankOptions'
import { Button } from '../UI/Button'
import RegisterInput from './RegisterInput'
import { EmployeeBase, EmployeeWithoutId } from '../../../types/type'

export type EmployeeInfoBase = {
  buttonText: string
  handleButtonClick: (registerInfo: EmployeeBase) => void
  employee?: EmployeeBase
  isClearInput?: boolean
  handleCloseButton?: React.MouseEventHandler<HTMLButtonElement>
  handleDeleteButton?: React.MouseEventHandler<HTMLButtonElement>
}

export function EmployeeInfoRegister({
  buttonText,
  employee,
  handleButtonClick,
  isClearInput,
  handleCloseButton,
  handleDeleteButton,
}: EmployeeInfoBase) {
  const [registerInfo, setRegisterInfo] = useState<EmployeeWithoutId>({
    first_name: employee?.first_name ?? null, //employeeがあれば.firstNameなければ空
    last_name: employee?.last_name ?? null,
    birthday: employee?.birthday ?? null,
    phone_number: employee?.phone_number ?? null,
    education: employee?.education ?? null,
    hire_date: employee?.hire_date ?? null,
    contract_id: employee?.contract_id ?? null,
    department_id: employee?.department_id ?? null,
    degree_id: employee?.degree_id ?? null,
    position_id: employee?.position_id ?? null,
  })

  const {
    first_name,
    last_name,
    birthday,
    phone_number,
    education,
    hire_date,
    contract_id,
    department_id,
    degree_id,
    position_id,
  } = registerInfo

  // reset //要チェック
  const resetRegisterInfo = () => {
    const newInfo = {
      first_name: employee?.first_name ?? null,
      last_name: employee?.last_name ?? null,
      birthday: employee?.birthday ?? null,
      phone_number: employee?.phone_number ?? null,
      education: employee?.education ?? null,
      hire_date: employee?.hire_date ?? null,
      contract_id: employee?.contract_id ?? null,
      department_id: employee?.department_id ?? null,
      degree_id: employee?.degree_id ?? null,
      position_id: employee?.position_id ?? null,
    }

    setRegisterInfo(newInfo)
  }

  return (
    <div className="registerEmployeeInfo">
      <RegisterNameInput
        label="Name"
        idLast="KanjiSei"
        idFirst="KanjiMei"
        type="string"
        valueLast={last_name}
        valueFirst={first_name}
        placeholderLast="Sur name"
        placeholderFirst="Given name"
        onChangeLast={(e) =>
          setRegisterInfo((prev) => ({
            ...prev, //今の値を展開してlastName以外に更新をかけないようにする
            last_name: e.target.value,
          }))
        }
        onChangeFirst={(e) =>
          setRegisterInfo((prev) => ({
            ...prev,
            first_name: e.target.value,
          }))
        }
      />

      <RegisterInput
        label="Birthday"
        id="birthday"
        type="date"
        value={birthday}
        onChange={(e) =>
          setRegisterInfo((prev) => ({
            ...prev,
            birthday: e.target.value,
          }))
        }
      />

      <RegisterInput
        label="Phone Number"
        id="phone_number"
        type="number"
        value={phone_number}
        onChange={(e) =>
          setRegisterInfo((prev) => ({
            ...prev,
            phone_number: e.target.value,
          }))
        }
      />
      <RegisterInput
        label="School"
        id="finalEducation"
        type="text"
        value={education}
        onChange={(e) =>
          setRegisterInfo((prev) => ({
            ...prev,
            education: e.target.value,
          }))
        }
      />

      <RegisterInput
        label="Enter Date"
        id="enterDate"
        type="date"
        value={hire_date}
        onChange={(e) =>
          setRegisterInfo((prev) => ({
            ...prev,
            hire_date: e.target.value,
          }))
        }
      />
      <ContractOptions onChange={setRegisterInfo} value={contract_id || ''} />
      <DepartmentOptions
        onChange={setRegisterInfo}
        value={department_id || ''}
      />
      <RankOptions onChange={setRegisterInfo} value={degree_id || ''} />
      <PositionOptions onChange={setRegisterInfo} value={position_id || ''} />
      <div className="employeeListButtons">
        {/* 保存・登録ボタン */}
        <Button
          text={buttonText}
          onClick={() => {
            handleButtonClick(registerInfo)
            if (isClearInput) {
              //inputを空にする
              resetRegisterInfo()
            }
          }}
        />
        {!isClearInput && ( //社員一覧にのみ表示のボタン
          <>
            <Button
              text={'✖️'}
              onClick={handleCloseButton}
              className="closeButton"
            />
            <Button
              text={'delete'}
              onClick={handleDeleteButton}
              className="deleteButton"
            />
          </>
        )}
      </div>
    </div>
  )
}
