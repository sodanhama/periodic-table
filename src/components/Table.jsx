import Element from './Element'

export default function Table() {
    const elements = [
        { name: 'Hydrogen', symbol: 'H', atomicNumber: 1 },
        { name: 'Helium', symbol: 'He', atomicNumber: 2 },
        { name: 'Lithium', symbol: 'Li', atomicNumber: 3 },
        { name: 'Beryllium', symbol: 'Be', atomicNumber: 4 },
        { name: 'Boron', symbol: 'B', atomicNumber: 5 },]

    return (
        <div>
            {elements.map((element) => (
                <Element key={element.atomicNumber} name={element.name} symbol={element.symbol} atomicNumber={element.atomicNumber} />
            ))}
        </div>
    )
}