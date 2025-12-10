import { useContext, useEffect, useMemo } from "react";
import { LanguageContext } from "./LanguageContext";
import { privacyPolices } from "../catalogs/privacy-polices";
import { usePageTracking } from '../hooks/usePageTracking';
import { fbPixelEvents } from '../utils/fbPixel';

const PrivacyPolicy = () => {
	const { language } = useContext(LanguageContext);
	
	// Tracking de página
	usePageTracking('Privacy Policy');

	useEffect(() => {
		window.scrollTo(0, 0);
		// Track vista de políticas de privacidad
		fbPixelEvents.viewPrivacyPolicy();
	}, []);

	const content = useMemo(() => privacyPolices, []);

	const currentLanguagePolices = useMemo(
		() => content[language],
		[content, language]
	);

	const title = useMemo(
		() => currentLanguagePolices.title,
		[currentLanguagePolices.title]
	);

	return (
		<div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-4xl mx-auto mt-10">
				<div className="bg-white shadow-lg rounded-lg p-8">
					<h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
						{title}
					</h1>

					<div className="prose prose-lg max-w-none text-gray-700 space-y-6">
						{Object.keys(currentLanguagePolices).map((key) => {
							if (key === "title") return;
							return (
								<section key={key}>
									<h2 className="text-2xl font-semibold text-gray-900 mb-4">
										{currentLanguagePolices[key].title}
									</h2>
									<p className="mb-4">
										{currentLanguagePolices[key].text}
									</p>
									{key === "rights" && (
										<>
											<p className="mb-2 ml-4">
												<strong>
													{
														content[language].rights
															.email
													}
												</strong>
											</p>
											<p className="mb-4 ml-4">
												<strong>
													{
														content[language].rights
															.address
													}
												</strong>
											</p>
										</>
									)}
									{currentLanguagePolices[key]?.items && (
										<ul className="list-disc list-inside mb-4 space-y-2 ml-4">
											{currentLanguagePolices[
												key
											].items.map((item, index) => (
												<li key={`${key}-${index}`}>
													{item}
												</li>
											))}
										</ul>
									)}
									<p className="mb-4">
										{currentLanguagePolices[key].disclaimer}
									</p>
								</section>
							);
						})}

						{/* last update */}
						<div className="mt-8 pt-6 border-t border-gray-200">
							<p className="text-sm text-gray-500">
								{content[language].lastUpdate}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PrivacyPolicy;
