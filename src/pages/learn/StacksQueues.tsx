// src/pages/learn/StacksQueues.tsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CodeEditor from '../../components/learning/CodeEditor';

const StacksQueues = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          {/* Cabeçalho */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Pilhas e Filas</h1>
            <span className="text-sm text-gray-500">Duração: 25 min</span>
          </div>

          {/* Conteúdo */}
          <div className="prose max-w-none mb-8">
            <h2>Pilhas (Stacks)</h2>
            <p>
              Pilhas são estruturas de dados do tipo LIFO (Last In, First Out),
              onde o último elemento inserido é o primeiro a ser removido.
            </p>

            <h3>Implementação de Pilha</h3>
            <CodeEditor
              initialCode={`#define MAX 100

struct Stack {
    int items[MAX];
    int top;
};

void initStack(struct Stack* s) {
    s->top = -1;
}

int isEmpty(struct Stack* s) {
    return s->top == -1;
}

int isFull(struct Stack* s) {
    return s->top == MAX - 1;
}

void push(struct Stack* s, int value) {
    if (!isFull(s)) {
        s->items[++s->top] = value;
    }
}

int pop(struct Stack* s) {
    if (!isEmpty(s)) {
        return s->items[s->top--];
    }
    return -1;
}

int peek(struct Stack* s) {
    if (!isEmpty(s)) {
        return s->items[s->top];
    }
    return -1;
}`}
              language="c"
            />

            <h2>Filas (Queues)</h2>
            <p>
              Filas são estruturas de dados do tipo FIFO (First In, First Out),
              onde o primeiro elemento inserido é o primeiro a ser removido.
            </p>

            <h3>Implementação de Fila</h3>
            <CodeEditor
              initialCode={`struct Queue {
    int items[MAX];
    int front;
    int rear;
};

void initQueue(struct Queue* q) {
    q->front = -1;
    q->rear = -1;
}

int isQueueEmpty(struct Queue* q) {
    return q->front == -1;
}

int isQueueFull(struct Queue* q) {
    return (q->rear + 1) % MAX == q->front;
}

void enqueue(struct Queue* q, int value) {
    if (!isQueueFull(q)) {
        if (isQueueEmpty(q))
            q->front = 0;
        q->rear = (q->rear + 1) % MAX;
        q->items[q->rear] = value;
    }
}

int dequeue(struct Queue* q) {
    if (!isQueueEmpty(q)) {
        int value = q->items[q->front];
        if (q->front == q->rear)
            q->front = q->rear = -1;
        else
            q->front = (q->front + 1) % MAX;
        return value;
    }
    return -1;
}`}
              language="c"
            />

            <h3>Comparação entre Pilhas e Filas</h3>
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2">Característica</th>
                  <th className="px-4 py-2">Pilha</th>
                  <th className="px-4 py-2">Fila</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">Ordem de acesso</td>
                  <td className="border px-4 py-2">LIFO</td>
                  <td className="border px-4 py-2">FIFO</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Inserção</td>
                  <td className="border px-4 py-2">push (topo)</td>
                  <td className="border px-4 py-2">enqueue (final)</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Remoção</td>
                  <td className="border px-4 py-2">pop (topo)</td>
                  <td className="border px-4 py-2">dequeue (início)</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Navegação */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t">
            <Link
              to="/learn/linked-lists"
              className="text-gray-600 hover:text-gray-900"
            >
              ← Aula Anterior
            </Link>
            <Link
              to="/learn/bubble-sort"
              className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Próxima Aula →
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default StacksQueues;