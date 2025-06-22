import VectorDiagonal from '@/icons/VectorDiagonal';
import Slider from './Slider';

export default function GalleryShowcase({ color }: { color: string }) {
    return (
        <section className={`w-full py-16 bg-${color} overflow-hidden`}>
            <div className="text-center px-4 flex flex-col justify-center items-center">
                <h2 className="text-white text-4xl md:text-[80px] font-[400]">
                    Designs that speak for themselves
                </h2>
                <p className="text-white text-lg md:text-2xl mt-4 max-w-3xl mx-auto">
                    Browse our AI-generated interiors and discover how smart design meets stunning aesthetics.
                </p>
                <button className="bg-[#D6DCFF] text-black px-8 py-4 rounded-xl mt-6 font-medium text-lg flex justify-center items-center gap-2 cursor-pointer">
                    Explore Gallery <VectorDiagonal stroke='black' />
                </button>
            </div>
            <Slider />
        </section>
    );
}