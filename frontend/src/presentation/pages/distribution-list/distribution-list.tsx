import React, { useState } from "react";
import Styles from "./distribution-list.module.scss";
import Modal from "../../components/modal/modal";
import DistributionModal from "./components/distribution-modal/distribution-modal";
import Header from "../../components/header/header";
import Path from "../../components/path/path";
import MyTable from "../../components/table/table";
import { VscGraphScatter } from "react-icons/vsc";
import { IoReturnUpForwardOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";

const DistributionList: React.FC = () => {
  const [opened, setOpened] = useState(false);

  
  const data = {
    name: "Canal de distribuição",
    defaultValue: "email",
    options: [
      {
        label: "E-mail",
        value: "email",
      },
      {
        label: "Whatsapp",
        value: "whatsapp",
      },
    ],
  };

  const content = () => {
    return <DistributionModal data={data} />;
  };

  return (
    <>
      <div className={Styles.distributionList}>
        {opened && (
          <Modal
            title="Nova distribuição"
            content={content()}
            close={() => setOpened(!opened)}
          />
        )}
      </div>
      <Header />
      <Path path={["Home", "Distribuição"]} />
      <div className={Styles.container}>
        <div className={Styles.header}>
          <h1>Pesquisa de Instalação de Software</h1>
          <button onClick={() => setOpened(true)}>
            Nova distribuição <FaPlus size={14} />
          </button>
        </div>
        <div className={Styles.selectors}>
          <button>
            Informações <VscGraphScatter size={30} color="#05CE7A" />
          </button>
          <button>
            Distribuição <IoReturnUpForwardOutline size={30} color="#05CE7A" />
          </button>
        </div>
        <MyTable></MyTable>
      </div>
    </>
  );
};

export default DistributionList;
