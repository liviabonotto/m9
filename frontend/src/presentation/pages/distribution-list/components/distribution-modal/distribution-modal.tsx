import React, { useState } from "react"
import Styles from "./distribution-modal.module.scss"
import { InputLabel, MenuItem, Select } from "@mui/material"
import { FaFile, FaFileUpload } from "react-icons/fa"

import { CSVLink } from "react-csv"
import { FileUploader } from "react-drag-drop-files"

type Option = {
  label: string
  value: string
}

type Props = {
  data: { name: string, defaultValue: string, options: Option[] }
}

const DistributionModal: React.FC<Props> = ({ data }: Props) => {
  const [value, setValue] = useState("")
  const [file, setFile] = useState<File>()

  const csvData = [
    ["nome", "email", "celular"],
  ]

  const fileTypes = ["CSV", "xlsx"]

  const handleChange = (file: File) => {
    setFile(file)
  }

  return (
    <>
      <p>
        Faça download da planilha modelo, preencha com os dados dos clientes e
        faça upload da planilha aqui.
      </p>

      <div className={Styles.selectContainer}>
        <InputLabel
          className={Styles.selectLabel}
          variant="filled"
          htmlFor="distribution"
        >
          {data.name}
        </InputLabel>

        <Select
          className={Styles.select}
          id="distribution"
          defaultValue={data.defaultValue}
          onChange={(e) => setValue(e.target.value)}
        >
          {data.options.map((option: Option) => (
            <MenuItem
              className={Styles.option}
              value={option.value}
              key={option.label}
            >
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </div>

      <div className={Styles.filesContainer}>
        <div className={Styles.download}>
          <div className={Styles.col}>
            <div className={Styles.header}>
              <FaFile size={32} />
              <h3>Planilha modelo</h3>
            </div>

            <p>Clique no botão para baixar o arquivo.</p>
          </div>

          <div className={Styles.col}>
            <CSVLink filename="Planilha modelo" data={csvData} target="_blank">
              <button className={Styles.button}>Download</button>
            </CSVLink>

          </div>
        </div>

        <div className={Styles.upload}>
          <FileUploader
            handleChange={handleChange}
            multiple={false}
            name="file"
            disabled
            children={
              <div className={Styles.container}>
                <FaFileUpload size={32} />
                <p>Apenas documentos com no máximo 5mb, no formato .csv ou .xlsx</p>

                <div>
                  <FileUploader
                    handleChange={handleChange}
                    multiple={false}
                    name="file"
                    children={
                      <span className={Styles.uploadInput}>Clique aqui para subir</span>
                    }
                  />
                  <span> ou arraste aqui.</span>
                </div>
              </div>
            }
            types={fileTypes}
          />
        </div>
      </div>

      {
        file && (
          <div className={Styles.fileUploaded}>
            <FaFile size={32} />
            <div className={Styles.container}>
              <p className={Styles.name}>
                {file.name}
              </p>
              <p className={Styles.description}>
                {file.size} KB - 100% carregado.
              </p>
            </div>
          </div>
        )
      }

      <hr className={Styles.line} />

      <button className={Styles.next}>Continuar</button>
    </>
  )
}

export default DistributionModal
