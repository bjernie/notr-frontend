import React from "react";

export default function PDFPanel({fileName, value, index, title}) {
    return (
        <>
            {value === index && (
                <div>
                    {index === 1 && (
                        <div className="visible md:invisible text-gray-500 text-center mt-2">
                            PDF kan ikke vises på mobil, download den i stedet
                        </div>
                    )}
                    <div>
                        <object data={'https://static.notr.dk/pdf/' + fileName + '.pdf'} type="application/pdf" className="w-screen md:w-full h-screen">
                            {title}
                        </object>
                    </div>
                </div>
            )}
        </>
    );
}
