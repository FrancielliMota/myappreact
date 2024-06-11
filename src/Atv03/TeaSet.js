// Define um objeto usuário e um componente Profile que exibe informações do usuário com imagem
function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>
}

export default function TeaSet() {
  return (
      <>
          <Cup guest={1} />
          <Cup guest={2} />
          <Cup guest={3} />
      </>
  )
}