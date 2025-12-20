export default function Button({ text }) {
return (
<button style={{
padding: '14px 32px',
borderRadius: '40px',
border: '2px solid var(--dark)',
background: 'transparent',
color: 'var(--dark)',
cursor: 'pointer'
}}>
{text}
</button>
)
}