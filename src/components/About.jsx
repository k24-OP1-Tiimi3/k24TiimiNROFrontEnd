import Photo from '../assets/img/1.jpg';

export default function About() {
    return (
        <div style={{maxWidth: '800px', margin: 'auto', padding: '0 20px'}}>
            <h1 style={{textAlign: 'center', marginTop: '20px'}}>About</h1>
            <div style={{textAlign: 'center', marginBottom: '20px'}}>
                <img src={Photo} alt="Frenchie Photo" style={{maxWidth: '70%', height: 'auto'}}/>
            </div>
            <p style={{textAlign: 'justify', lineHeight: '1.6'}}>
                Dog Shop was created to deliver high-quality, functional, comfortable pet essentials at accessible
                prices.
                <br/><br/>
                Hello fellow dog parents! We're not the typical pet industry veterans; our journey with Dog Store began
                in 2017 with a simple problem: finding quality yet affordable clothes for our Frenchie Stella was
                mission impossible. That was our 'aha!' moment - there is a serious need for quality dog gear that
                doesn't cost an arm and a leg!
                Our approach is straightforward: quality is the most important. We use superior materials, custom
                made-for-dog fabrics, and pay attention to the little details that matter.
                The "FIT" is just as important! We've measured thousands of pooches, creating an extensive database of
                doggie dimensions to ensure our gear fits every pup like a glove.
                Our goal? To bring your dog top-quality products and spark joy between pets and people.
                Thanks for joining us on this journey. Here's to wagging tails!
            </p>
            <p style={{textAlign: 'center', marginTop: '20px', fontStyle: 'italic'}}>
                Sincerely Jonas, Duy, Eki, Kasperi & Ponki
                <br/>
                Business Identity Code: 1234567-8
            </p>
        </div>
    );
}
