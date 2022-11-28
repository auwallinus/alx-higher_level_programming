#include "lists.h"

/**
 * check_cycle - checks if a linked list contains a cycle
 * @list: linked list to check
 * 
 * Return: 1 if the list has a cycle, 0 if it doesn't
 */
int check_cycle(listint_t *list)
{
	listint_t *slow = list;
	listint_t *fast = list;

	if (!list)
		return (0);

	while (slow && fast && fast->next)
	{
		slow = slow->next;
		fast = fast->next->next;
		if (slow == fast)
			return (1);
	}

	return (0);
}

#include "lists.h"

/**
 * check_cycle - function checks if a singly linked list has a cycle in it.
 * @list: pointer to the beginning of the node
 * Return: 0 if no cycle, 1 if there is a cycle
 */
int check_cycle(listint_t *list)
{
	listint_t *current, *check;

	if (list == NULL || list->next == NULL)
		return (0);
	current = list;
	check = current->next;

	while (current != NULL && check->next != NULL
		&& check->next->next != NULL)
	{
		if (current == check)
			return (1);
		current = current->next;
		check = check->next->next;
	}
	return (0);
}
