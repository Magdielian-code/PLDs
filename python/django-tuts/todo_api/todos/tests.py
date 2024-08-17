from django.test import TestCase

from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase

from .models import todo


class todoModelTest(TestCase):

    def setUp(self):
        self.todo = todo.objects.create(title='First todo', description='A description here')
        self.todo2 =  todo.objects.create(title='Second todo', description='A description here')

    def test_todo(self):
        todo_obj = todo.objects.get(id=1)
        expected_object_name = f'{todo_obj.title}'
        self.assertEqual(expected_object_name, 'First todo')

    def test_api_listview(self):
        response = self.client.get(reverse('todos_list'))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(todo.objects.count(), 2)
        print(self.todo)
        self.assertContains(response, self.todo.title)
        self.assertContains(response, self.todo2.title)

    def test_api_detailview(self):
        response = self.client.get(reverse('todo_detail', kwargs={'pk': self.todo.id}), format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertContains(response, self.todo)