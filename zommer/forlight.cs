//     <label class="toggle">
//         <input type="checkbox" id="toggle-button">
//         <span class="slider"></span>
//         <span class="border-line"></span>
//     </label>
// h1 {
//     margin-bottom: 1em;
//     font-size: 24px;
//     color: #f0f0f5;
// }
// .toggle {
//     position: relative;
//     display: inline-block;
//     width: 80px;
//     height: 40px;
//     cursor: pointer;
// }
// .toggle input {
//     opacity: 0;
//     width: 0;
//     height: 0;
// }
// .slider {
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background-color: #333;
//     border-radius: 90px;
//     transition: background-color 0.4s;
//     z-index: 2;
// }
// .slider:before {
//     position: absolute;
//     content: "";
//     height: 30px;
//     width: 30px;
//     left: 5px;
//     bottom: 5px;
//     background-color: white;
//     transition: transform 0.4s;
//     border-radius: 50%;
//     box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
// }
// .border-line {
//     position: absolute;
//     top: -4px;
//     left: -4px;
//     right: -4px;
//     bottom: -4px;
//     border-radius: 90px;
//     pointer-events: none;
//     opacity: 0;
//     transition: opacity 0.9s;
//     overflow: hidden;
// }
// .border-line::before {
//     content: "";
//     position: absolute;
//     height: 8px;
//     width: 30px;
//     background-color: #928f91;
//     border-radius: 4px;
//     box-shadow: 0 0 8px rgba(27, 27, 27, 0.8);
//     animation: moveDotSmooth 3s infinite linear;
// }
// @keyframes moveDotSmooth {
//     0% { top: 0; left: 0; }
//     25% { top: 0; left: calc(100% - 30px); }
//     50% { top: calc(100% - 8px); left: calc(100% - 30px); }
//     75% { top: calc(100% - 8px); left: 0; }
//     100% { top: 0; left: 0; }
// }
// input:checked + .slider {
//     background-color: #1f201f;
// }
// input:checked + .slider:before {
//     transform: translateX(40px);
// }
// input:checked ~ .border-line {
//     opacity: 1;
// }
                                            