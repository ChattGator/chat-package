import {
  BioSectionContainer,
  Button,
  ChatBody,
  Container,
  RecentChatBody,
} from "chat-ui-kit";
import "./App.css";
import logo from "./logo.svg";

function App() {
  return (
    <Container>
      <RecentChatBody />
      <ChatBody />
      <BioSectionContainer />
    </Container>
  );
}

export default App;
