import React from "react";
import Modal from "react-modal";
import * as Icon from "react-feather";
import Layout from "../layouts/Layout";
import HeaderBox from "./HeaderBox";
import Tabs from "./Tabs";
import Loader from "./Loader";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    marginTop: 46,
    height: "calc(100vh - (56px + 46px))",
    width: "100vw",
    alignItems: "center",
    animationDelay: "1.2s",
    overflow: "hidden",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  modalContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px",
  },
  modalContent: {
    display: "flex",
    flexDirection: "column",
    padding: 10,
    width: "75vw",
  },
  colors: {
    case: "#03a9f4",
    recover: "#53b501",
    death: "#ff9100",
  },
};

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function Home({
  cases,
  today,
  states,
  total,
  tested,
  isLoading,
  errorMessage,
}) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function closeModal() {
    setIsOpen(false);
    localStorage.setItem("time", new Date().toString());
  }

  setTimeout(() => {
    if (window.matchMedia("(display-mode: standalone)").matches) {
      // Thank You!
    } else {
      const dateString = localStorage.getItem("time", new Date().toString());
      if (dateString) {
        const date = new Date(dateString);
        if ((new Date() - date) / 1000 / 60 / 60 > 4) {
          setIsOpen(true);
        }
      } else {
        setIsOpen(true);
      }
    }
  }, 4000);

  return (
    <Layout selectedNav={2}>
      <div style={styles.container} className="fadeInUp">
        {isLoading ? (
          <Loader />
        ) : !isLoading && errorMessage !== "" ? (
          <span>
            Unable to fetch data, Please try again later <br />
            {errorMessage}
          </span>
        ) : (
          <>
            <HeaderBox today={today} total={total} colors={styles.colors} />
            <br />
            <Tabs states={states} cases={cases} colors={styles.colors} />
          </>
        )}
      </div>
      {!isLoading && errorMessage === "" && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Install"
          ariaHideApp={false}
        >
          <div style={styles.modalContainer}>
            <span style={{ fontSize: "3vh" }}>Instant Installation</span>
            <Icon.EyeOff onClick={closeModal} />
          </div>
          <div style={styles.modalContent}>
            <span style={{ display: "flex", alignItems: "center" }}>
              <span>1. Go to </span>
              <Icon.MoreVertical size="20" />
              <p>{`then  `}</p>
              <p style={{ fontWeight: "bold" }}> 'Add to Home Screen'</p>
            </span>
            <span>OR</span>
            <br />
            <span>
              2. Click on 'Add to Home Sceen' when open this app in browser.
            </span>
          </div>
        </Modal>
      )}
    </Layout>
  );
}
