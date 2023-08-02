import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 40px);
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  max-width: 60%;
  padding: 20px 30px;

  background: #fff;
  border-radius: 10px;
  box-shadow:
    1px 1px 2px rgba(0, 0, 0, 0.1),
    -1px -1px 2px rgba(0, 0, 0, 0.1);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;

  margin-bottom: 20px;
`;

export const Title = styled.h3`
  padding: 15px 0;
  font-size: 26px;
  font-weight: 600;
  line-height: 22px;
  color: #000000;
`;

export const TextQuestion = styled.div`
  margin-bottom: 7px;

  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  color: #000000;

  opacity: 0.5;
`;

export const LinkRegistration = styled.div`
  cursor: pointer;

  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: #212121;
  text-decoration-line: underline;
`;

export const IconTwitter = styled.img`
  width: 30px;
  height: 30px;
`;
