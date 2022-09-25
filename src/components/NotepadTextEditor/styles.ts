import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;

  .mantine-RichTextEditor-root {
    overflow: hidden;
    background: transparent;
    color: ${({ theme }) => theme.colors.LIGHTEST};

    font-size: 16px;

    @media screen and (min-width: 768px) {
      font-size: 20px;
    }

    .quill {
      height: 100%;
      .ql-editor {
        height: 100%;
      }
    }
  }

  .mantine-RichTextEditor-toolbar	 {
    background: transparent;

    border-bottom: none;
  }
` 