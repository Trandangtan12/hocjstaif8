const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = (() => {
  const cars = ["BMV"];

  const root = $("#root");
  const input = $("#input");
  const submit = $("#submit");

  return {
    add(car) {
      cars.push(car);
    },
    delete(index) {
      cars.splice(index, 1);
    },
    render() {
      const html = cars
        .map(
          (car, index) => `
                  <li>${car}
                  <span data-index=${index} class="delete">xoa</span></li>
              `
        )
        .join("");

      root.innerHTML = html;
    },
    handleDelete(e) {
      const btnDelete = e.target.closest(".delete");
      if (btnDelete) {
        const index = btnDelete.dataset.index;
        this.delete(index);
        this.render();
      }
    },
    init() {
      submit.onclick = () => {
        const car = input.value;
        this.add(car);
        this.render();

        input.value = null;
        input.focus();
      };
      this.render();

      root.onclick = this.handleDelete.bind(this);
    },
  };
})();

app.init();
