export default function BodyPost ({ content }) {
  return (
    <div
      className='post'
    >
      <div className='content' dangerouslySetInnerHTML={{ __html: content }} />
      <style jsx>
        {`
          .post {
            padding: 25px 0;
          }
        `}
      </style>
    </div>
  )
}
