import {
  BioSectionContainer,
  ChatBody,
  Container,
  RecentChatBody,
} from "chat-ui-kit";
import "./App.css";
import logo from "./logo.svg";

function App() {
  return (
    <Container>
      <BioSectionContainer />
      <ChatBody />
      <RecentChatBody />
    </Container>
  );
}

export default App;
