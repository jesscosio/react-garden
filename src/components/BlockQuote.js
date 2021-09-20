import React from "react";
import styled from "styled-components";

class BlockQuote extends React.Component {
  state = { quoteIndex: 0 };

  componentDidMount() {
    this.quoteTimer = setInterval(() => this.nextQuote(), 7000);
  }
  componentWillUnmount() {
    clearInterval(this.quoteTimer);
  }
  nextQuote() {
    const maxLength = this.props.quotes.length - 1;

    this.setState({
      quoteIndex:
        this.state.quoteIndex + 1 > maxLength ? 0 : this.state.quoteIndex + 1,
    });
  }
  render() {
    return (
      <blockquote
        className="blockquote mt-2"
        style={{
          width: "100vw",
          height: "30vh",
          padding: "1.5em",
          backgroundColor: "#85144b",
          color: "hsla(331, 74%, 70%, 1.0)",
        }}
      >
        <p
          className="mb-3 "
          style={{ overflow: "hidden", textOverflow: "ellipsis" }}
        >
          {this.props.quotes[this.state.quoteIndex].quote}
        </p>
        <footer className="blockquote-footer">
          <cite title="Source Title">
            {this.props.quotes[this.state.quoteIndex].author}
          </cite>
        </footer>
      </blockquote>
    );
  }
}

export const QuoteContainer = styled.div`
  @keyframes displayQuote {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  animation: displayQuote 1s linear infinite;
`;

export default BlockQuote;
