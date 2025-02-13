export default function SheepFacialRecognition() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-8 text-slate-200">Sheep Facial Recognition (AI)</h1>
        
        <div className="space-y-8">
          {/* Project Overview */}
          <section className="bg-gray-800 bg-opacity-50 p-8 rounded-xl backdrop-filter backdrop-blur-lg border border-slate-700/30">
            <h2 className="text-2xl font-semibold mb-4 text-slate-300">Project Overview</h2>
            <p className="text-slate-400">
              In this project, my team of 6 undergraduate students worked on developing an advanced facial recognition system using 
              state-of-the-art Convolutional Neural Networks (CNNs) and cascaded network architectures to uniquely 
              identify individual sheep and perform evaluation of their welfare.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3 text-slate-300">Problem</h3>
            <p className="text-slate-400">
              <b>Sheep Traceability</b><br/>
              The sheep industry faces growing pressure to improve traceability, as mandated by the Health of Animals Regulations, 
              which require animals to be uniquely identifiable throughout their lives. 
              Traditional RFID ear-tags are time-consuming, resource-intensive, and require manual intervention. 
              As a result, there is increasing interest in leveraging AI to enhance sheep traceability efficiently.

              <br/>
              <br/>
              <b>Welfare Assessment</b><br/>
              Beyond traceability, Part XII of the Health of Animals Regulations aims to minimize animal suffering during transport. 
              However, current welfare assessments rely on manual inspection, making the process time-consuming, inconsistent, and prone to human error. 
              Inefficiencies in monitoring could negatively impact the industry and contribute to disease spread. 
              A more accurate and automated welfare assessment method is needed.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-slate-300">Goal</h3>
            <p className="text-slate-400">
              The goal of this project is to develop an AI-driven solution that streamlines real-time sheep tracking and reporting while ensuring data integrity, regulatory compliance, and minimal stress on the animals. This system aims to improve efficiency by reducing manual intervention and enabling timely error correction.
            </p>
          </section>

          {/* Technical Details */}
          <section className="bg-gray-800 bg-opacity-50 p-8 rounded-xl backdrop-filter backdrop-blur-lg border border-slate-700/30">
            <h2 className="text-2xl font-semibold mb-4 text-slate-300">Technical Details</h2>
            <p>We began by analyzing existing solutions for sheep traceability and welfare assessment, identifying gaps our AI-driven system needed 
              to address. Given the problem's complexity, we divided it into two key components: unique sheep identification and welfare assessment.</p>
            <br/>
            <div className="my-6 grid grid-cols-2 gap-4">
              <div>
                <div className="h-[350px] overflow-y-auto">
                  <img 
                    src="/images/sheep-facial-recognition/sfr_1.png" 
                    alt="Sheep facial recognition system showing detected landmarks" 
                    className="rounded-xl w-full border-2 border-slate-600/30 shadow-lg shadow-slate-900/50 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-emerald-900/20 opacity-80 hover:opacity-100"
                  />
                </div>
                <p className="text-sm text-slate-400 text-center mt-2">
                  Unique Sheep Identification Lifecycle
                </p>
              </div>
              <div className="h-[380px]">
                <img 
                  src="/images/sheep-facial-recognition/sfr_2.png" 
                  alt="Sheep facial recognition system showing detected landmarks" 
                  className="rounded-xl w-full border-2 border-slate-600/30 shadow-lg shadow-slate-900/50 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-emerald-900/20 opacity-80 hover:opacity-100"
                />
                <p className="text-sm text-slate-400 text-center mt-2">
                  Welfare assessment system flowchart
                </p>
              </div>
            </div>
            <p>To manage the workload efficiently, we split the project into smaller modules. 
              My primary responsibilities included facial pinpoints detection, face normalization, and landmark feature extraction. 
              We focused on detecting eight key facial landmarks—left eye (LE), right eye (RE), middle nose (MN), left nose corner (LN), 
              right nose corner (RN), middle mouth (MM), left mouth corner (LM), and right mouth corner (RM)—as a proof of concept, 
              though more landmarks would be needed for optimal accuracy.</p>
            <br/>
            <div className="my-6">
              <img 
                src="/images/sheep-facial-recognition/sfr_3.png" 
                alt="Sheep facial recognition system showing detected landmarks" 
                className="rounded-xl w-full max-w-3xl mx-auto border-2 border-slate-600/30 shadow-lg shadow-slate-900/50 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-emerald-900/20 opacity-80 hover:opacity-100"
              />
              <p className="text-sm text-slate-400 text-center mt-2">
                CNN architecture for facial landmark detection
              </p>
            </div>
            <p>For facial landmark localization, I explored cascaded convolutional neural networks (CNNs) to iteratively refine landmark predictions. 
              Cascading introduces redundancy, helping the model improve accuracy in pinpointing facial features. 
              Another proposed approach involved direct regression via ResNet transfer learning. Since ResNet is pretrained on millions of images, 
              it has a strong grasp of both high-level spatial structures and low-level details like edges and textures. 
              By fine-tuning ResNet, we adapted its learned representations to the task of sheep facial landmark detection.</p>
            <br />
            <p>For training and validation, I labeled 160 sheep face images, using data augmentation (random translations, brightness adjustments, scaling, rotation (-25° to 25°), and 10% noise) 
              to expand the dataset to 640 images. Training images helped the model learn, while validation images provided an unbiased evaluation of 
              its performance.</p>
            <br />
            <div className="my-6">
              <img 
                src="/images/sheep-facial-recognition/sfr_4.png" 
                alt="Sheep facial recognition system showing detected landmarks" 
                className="rounded-xl w-full max-w-3xl mx-auto border-2 border-slate-600/30 shadow-lg shadow-slate-900/50 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-emerald-900/20 opacity-80 hover:opacity-100"
              />
              <p className="text-sm text-slate-400 text-center mt-2">
                Example of facial landmark detection on a sheep, showing the 8 key points used for identification
              </p>
            </div>
          </section>

          {/* Results */}
          <section className="bg-gray-800 bg-opacity-50 p-8 rounded-xl backdrop-filter backdrop-blur-lg border border-slate-700/30 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-slate-300">Results</h2>
            <p className="text-slate-400 mb-4">
              The project achieved promising results in sheep facial landmark detection. Our cascaded CNN approach demonstrated robust performance, 
              with an average landmark detection error of less than 5 pixels on validation images. 
              The ResNet-based model showed slightly lower accuracy on validation compared to training data, 
              indicating good generalization capabilities while still maintaining reasonable performance.
            </p>
            <p className="text-slate-400 mb-4">
              Key achievements include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-400 mb-4">
              <li>95% accuracy in detecting all 8 facial landmarks within a 10-pixel radius</li>
              <li>Robust performance under varying lighting conditions and head poses</li>
              <li>Successful identification of individual sheep with 92% accuracy using extracted facial features</li>
            </ul>
            <p className="text-slate-400">
              These results demonstrate the viability of automated sheep identification through facial recognition, though further improvements could be made by expanding the dataset and incorporating additional facial landmarks.
            </p>

            <div className="my-6">
              <iframe
                className="rounded-xl w-full max-w-3xl mx-auto border-2 border-slate-600/30 shadow-lg shadow-slate-900/50 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-emerald-900/20 opacity-80 hover:opacity-100"
                width="100%"
                height="500"
                src="https://www.youtube.com/embed/PDaJWA3PSCg" // Replace YOUR_VIDEO_ID_HERE with your actual YouTube video ID
                title="Sheep Facial Recognition Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p className="text-sm text-slate-400 text-center mt-2">
                Demo video showing the sheep facial recognition system in action
              </p>
            </div>
          </section>

          {/* Technologies Used */}
          <section className="bg-gray-800 bg-opacity-50 p-8 rounded-xl backdrop-filter backdrop-blur-lg border border-slate-700/30">
            <h2 className="text-2xl font-semibold mb-4 text-slate-300">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {["Python", "TensorFlow", "OpenCV", "Neural Networks", "PyTorch"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Back Button */}
          <div className="mt-8">
            <a
              href="/#projects"
              className="inline-block px-6 py-3 text-emerald-400 border border-emerald-400 rounded-lg hover:bg-emerald-400 hover:text-white transition-all duration-200"
            >
              ← Back to Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 